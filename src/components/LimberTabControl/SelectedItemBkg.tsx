import React, { FC, useMemo, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const openStatePath =
  'M 90 10 c 3 0 9.9 0 10 -10 v 10 M 100 10 h -80 a 2 2 2 0 0 0 30 h 90 M 90 40 c 11 0 10 10 10 8 v -8 z';
const closedStatePath =
  'M 90 10 c 3 0 9.9 0 10 -10 v 10 M 100 10 H 90 a 2 2 2 0 0 0 30 h 10 M 90 40 c 11 0 10 10 10 8 v -8 z';
/** Based on seconds */
const duration = 0.6;

type SelectedItemBkgProps = {
  positionRect?: DOMRect;
};

const Wrapper = styled.svg<{ top: number }>`
  position: absolute;
  top: ${(p) => p.top ?? 0}px;
  z-index: 0;
  transition: ${duration}s all ease;
  visibility: hidden;
`;

export const SelectedItemBkg: FC<SelectedItemBkgProps> = ({ positionRect }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgAnimation = useRef<SVGAnimateElement & { beginElement: () => void }>(null);
  const [svgSize, setSvgSize] = useState<DOMRect>();

  /** Prevents id conflicts when using double instance on same document. */
  const idSalt = useMemo(() => Math.ceil(Math.random() * 1000), []);

  const topPosition = useMemo(() => {
    if (!positionRect || !svgSize) return null;
    return positionRect.y - (svgSize.height - svgSize.height / 2 - positionRect.height / 2);
  }, [positionRect, svgSize]);

  useEffect(() => {
    setTimeout(() => setSvgSize(svgRef.current?.getBoundingClientRect()));
  }, []);

  useEffect(() => {
    if (!topPosition) return;
    svgAnimation.current?.beginElement();
    setTimeout(() => (svgRef.current!.style.visibility = 'visible'), (duration / 2) * 1000);
  }, [topPosition]);

  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 50"
      ref={svgRef}
      top={topPosition || 0}
      id="selectedBkg"
    >
      <path id={`${idSalt}p1`} d={openStatePath} fill="white" />

      <animate
        ref={svgAnimation}
        id={`#${idSalt}anim1`}
        xlinkHref={`#${idSalt}p1`}
        attributeName="d"
        attributeType="XML"
        from={openStatePath}
        to={closedStatePath}
        dur={duration / 2}
        fill="freeze"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.4 0 0.2 1"
        begin="indefinite"
      />

      <animate
        id={`#${idSalt}anim2`}
        xlinkHref={`#${idSalt}p1`}
        attributeName="d"
        attributeType="XML"
        from={closedStatePath}
        to={openStatePath}
        dur={duration / 2}
        begin={`#${idSalt}anim1.end`}
        fill="freeze"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.4 0 0.2 1"
      />
    </Wrapper>
  );
};
