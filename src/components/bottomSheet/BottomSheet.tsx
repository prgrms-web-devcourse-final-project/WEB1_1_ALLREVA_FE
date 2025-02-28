import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { useModalStore } from 'stores';
import type { BottomSheetType } from 'types';

interface BottomSheetProps {
  children: React.ReactNode;
  name: BottomSheetType;
}

const BottomSheet = ({ children, name }: BottomSheetProps) => {
  const { closeModal } = useModalStore(['closeModal']);

  return (
    <>
      <Overlay
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={() => closeModal('bottomSheet', name)}
      />
      <StyledMotionDiv
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        initial={{ y: '100%' }}
        style={{ x: '-50%' }}
        transition={{
          type: 'spring',
          damping: 60,
          stiffness: 350,
          mass: 0.8,
        }}
      >
        <HandleBar />
        {children}
      </StyledMotionDiv>
    </>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

BottomSheet.Header = Header;
BottomSheet.Content = Content;
BottomSheet.Footer = Footer;

const Overlay = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const StyledMotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform-origin: bottom center;
  max-width: ${({ theme }) => theme.maxWidth};
  max-height: 50vh;
  width: 100%;
  padding: 1.2rem 2.4rem 1.6rem;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.colors.dark[700]};
  z-index: 1002;
  color: ${({ theme }) => theme.colors.dark[50]};
`;

const HeaderWrapper = styled.div`
  text-align: center;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark[500]};
`;

const HandleBar = styled.div`
  width: 5rem;
  height: 0.3rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  border-radius: 9999px;
`;

const ContentWrapper = styled.div`
  padding: 1.6rem 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export default BottomSheet;
