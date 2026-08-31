import React, { useEffect, useMemo, useRef, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const FRAME_INTERVAL = 50;

const useSlowRotation = (ref) => {
  const { invalidate } = useThree();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timerId;

    const renderNextFrame = () => {
      if (document.visibilityState !== "visible" || reducedMotion) return;
      if (ref.current) {
        ref.current.rotation.x -= 0.0015;
        ref.current.rotation.y -= 0.002;
        invalidate();
      }
      timerId = window.setTimeout(renderNextFrame, FRAME_INTERVAL);
    };

    const handleVisibilityChange = () => {
      window.clearTimeout(timerId);
      if (document.visibilityState === "visible" && !reducedMotion) renderNextFrame();
    };

    if (!reducedMotion) renderNextFrame();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [invalidate, ref]);
};

const Stars = (props) => {
  const ref = useRef();
  const sphere = useMemo(() =>
    random.inSphere(new Float32Array(1800), { radius: 1.35 }),
    []
  );

  useSlowRotation(ref);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop="demand"
        dpr={1}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
