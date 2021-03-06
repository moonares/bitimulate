import React from 'react';
import { PageTemplate, PolyBackground, BgColor, CoinMain, Card } from 'components';
import {HeaderContainer, CoinMainContainer, SocketSubscriber} from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import IntroQuestionContainer from 'containers/IntroQuestionContainer';
import MoreIcon from 'react-icons/lib/md/more-vert';
import { Link } from 'react-router-dom';
import TrophyIcon from 'react-icons/lib/fa/trophy';
import GithubIcon from 'react-icons/lib/go/mark-github';
import EmailIcon from 'react-icons/lib/md/email';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <SocketSubscriber channel="TICKER"/>
      <PolyBackground home>
        <IntroQuestionContainer/>
      </PolyBackground>
      <BgColor color="#f6f6f6"/>
      <div className={cx('block', 'responsive')}>
        <h2>비티뮬레이트에선, 현재 총 <b>68</b>개의 가상화폐를 지원합니다.</h2>
        <CoinMainContainer/>
        <div className={cx('more')}>
          <Link className={cx('more-button')} to="/trade">
            거래소에서 더 보기
          </Link>
        </div>
      </div>
      <div className={cx('third')}>
        <div className={cx('responsive')}>
          <Link to="/ranking" className={cx('column')}>
            <TrophyIcon/>
            <div className={cx('description')}>
              <h3>랭킹 시스템</h3>
              <p>수익률을 다른 사람들과 경쟁해보세요. <br/>그리고, 다른사람들의 거래 전략을 확인해보세요!</p>
            </div>
          </Link>
          <a className={cx('column')} href="https://github.com/velopert/bitimulate" target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            <div className={cx('description')}>
              <h3>오픈소스</h3>
              <p>비티뮬레이트는 오픈소스 프로젝트 입니다. <br/>Pull Request는 언제나 환영입니다.</p>
            </div>
          </a>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('email')}>
          <EmailIcon/> support@bitimulate.com
        </div>
        <div className={cx('copyright')}>
          Copyright © 2017 Bitimulate
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomePage;