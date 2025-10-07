import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillPauseCircle,
} from 'react-icons/ai';
import { useRaf, useWindowSize } from 'rooks';

import theme from '../theme';
import NavModal from './NavModal';
import useStore from '../../context/mainStore';
import CONFIG from '../../configs';

const { navTitle } = CONFIG;

const MainContainer = styled.div`
  /* 原有样式保持不变 */
`;

const MenuButton = styled.button`
  /* 原有样式保持不变 */
`;

const PlayButton = styled.div`
  /* 原有样式保持不变 */
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { innerWidth } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(innerWidth);
  const [playAudio, setPlayingAudio] = useState(true);
  const audio = useRef();
  let userinteraction = 0;
  const modalRef = useRef(null);

  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio('audio/music.mp3');
      audio.current.loop = true;

      document.addEventListener('click', () => {
        if (userinteraction) return;
        userinteraction++;
        audio.current.play();
        setPlayingAudio(!audio.current.paused);
      });
    }
  }, []);

  useEffect(() => {
    setWindowWidth(innerWidth);
  }, [innerWidth]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={isOpen ? 'open' : 'closed'}
        timeout={500}
        classNames="example"
        nodeRef={modalRef}
      >
        <NavModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </CSSTransition>
      <MainContainer windowWidth={windowWidth}>
        <PlayButton
          onClick={() => {
            if (audio.current.paused) {
              audio.current.play();
            } else {
              audio.current.pause();
            }

            setPlayingAudio(!audio.current.paused);
          }}
        >
          {!playAudio ? (
            <AiFillCaretRight color={theme.colors.primary} size={30} />
          ) : (
            <AiFillPauseCircle color={theme.colors.primary} size={30} />
          )}
        </PlayButton>
        <div>{navTitle}</div>
        <MenuButton onClick={() => setIsOpen(true)}>
          <AiOutlineMenu color={theme.colors.primary} size={30} />
        </MenuButton>
      </MainContainer>
    </TransitionGroup>
  );
};

export default NavBar;
