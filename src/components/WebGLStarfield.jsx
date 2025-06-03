import { useEffect, useRef } from 'react';

export const WebGLStarfield = ({ speed = 1, density = 5000 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return;

        // Vertex shader
        const vertexShaderSource = `
      attribute vec3 position;
      attribute float size;
      attribute float alpha;
      
      uniform mat4 projectionMatrix;
      uniform float time;
      uniform float speed;
      
      varying float vAlpha;
      
      void main() {
        vec3 pos = position;
        pos.z = mod(pos.z - time * speed, 1000.0) - 500.0;
        
        vec4 mvPosition = vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        float perspective = 1.0 / (1.0 + pos.z * 0.001);
        gl_PointSize = size * perspective * 100.0;
        
        vAlpha = alpha * (1.0 - pos.z / 500.0);
      }
    `;

        // Fragment shader
        const fragmentShaderSource = `
      precision mediump float;
      
      varying float vAlpha;
      
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float distance = length(coord);
        
        if (distance > 0.5) {
          discard;
        }
        
        float alpha = vAlpha * (1.0 - distance * 2.0);
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
      }
    `;

        // Compile shaders
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        // Create program
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        // Get attribute and uniform locations
        const positionAttribute = gl.getAttribLocation(program, 'position');
        const sizeAttribute = gl.getAttribLocation(program, 'size');
        const alphaAttribute = gl.getAttribLocation(program, 'alpha');
        const projectionMatrixUniform = gl.getUniformLocation(program, 'projectionMatrix');
        const timeUniform = gl.getUniformLocation(program, 'time');
        const speedUniform = gl.getUniformLocation(program, 'speed');

        // Generate stars
        const starCount = density;
        const positions = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);
        const alphas = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 2] = Math.random() * 1000 - 500;

            sizes[i] = Math.random() * 3 + 1;
            alphas[i] = Math.random() * 0.8 + 0.2;
        }

        // Create buffers
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        const sizeBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);

        const alphaBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.STATIC_DRAW);

        // Set up projection matrix
        const fieldOfView = 45 * Math.PI / 180;
        const aspect = canvas.width / canvas.height;
        const zNear = 0.1;
        const zFar = 2000.0;
        const projectionMatrix = mat4Perspective(fieldOfView, aspect, zNear, zFar);

        // Animation
        let startTime = Date.now();

        const render = () => {
            const currentTime = Date.now();
            const time = (currentTime - startTime) * 0.001;

            // Resize canvas
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);

            // Clear
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            // Enable blending
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            // Set uniforms
            gl.uniformMatrix4fv(projectionMatrixUniform, false, projectionMatrix);
            gl.uniform1f(timeUniform, time);
            gl.uniform1f(speedUniform, speed);

            // Bind attributes
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.enableVertexAttribArray(positionAttribute);
            gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
            gl.enableVertexAttribArray(sizeAttribute);
            gl.vertexAttribPointer(sizeAttribute, 1, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer);
            gl.enableVertexAttribArray(alphaAttribute);
            gl.vertexAttribPointer(alphaAttribute, 1, gl.FLOAT, false, 0, 0);

            // Draw
            gl.drawArrays(gl.POINTS, 0, starCount);

            requestAnimationFrame(render);
        };

        render();

        // Cleanup
        return () => {
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.deleteProgram(program);
            gl.deleteBuffer(positionBuffer);
            gl.deleteBuffer(sizeBuffer);
            gl.deleteBuffer(alphaBuffer);
        };
    }, [speed, density]);

    // Matrix multiplication helper
    function mat4Perspective(fov, aspect, near, far) {
        const f = 1.0 / Math.tan(fov / 2);
        const nf = 1 / (near - far);

        return new Float32Array([
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (far + near) * nf, -1,
            0, 0, (2 * far * near) * nf, 0
        ]);
    }

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: 'black' }}
        />
    );
};