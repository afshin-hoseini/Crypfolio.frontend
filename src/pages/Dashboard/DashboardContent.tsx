import React, { CSSProperties, FC } from 'react';
import { useLocation } from 'react-router';
import { Transition, SwitchTransition } from 'react-transition-group';
import { DashboardContentWrapper } from './styles';

const duration = 300;
const defaultStyle: CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
  unmounted: { opacity: 0 },
};

export const DashboardContent: FC = ({ children }) => {
  const location = useLocation();

  return (
    <SwitchTransition mode="out-in">
      <Transition
        unmountOnExit
        timeout={duration}
        key={location.key}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done);
        }}
      >
        {(state) => (
          <DashboardContentWrapper
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </DashboardContentWrapper>
        )}
      </Transition>
    </SwitchTransition>
  );
};
