import { StyledLink } from '@components/atoms';
import { MenuItemProps } from '@constants/MenuItem';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import MenuDropdown from '../MenuDropdown/MenuDropdown';

export const menuItems: MenuItemProps[] = [
  {
    title: '제품',
    submenu: [
      {
        subtitle: 'DRAM',
        subtitleIcons: 'icon-gnb-dram.svg',
        content: [
          {
            contentTitle: 'DDR',
          },
          {
            contentTitle: 'HBM',
          },
          {
            contentTitle: '모듈',
          },
        ],
      },
      {
        subtitle: 'MCP',
        subtitleIcons: 'icon-gnb-mcp.svg',
        content: [],
      },
      {
        subtitle: '이미지센서',
        subtitleIcons: 'icon-gnb-imagesensor.svg',
        content: [
          {
            contentTitle: '모바일 이미지 센서',
          },
          {
            contentTitle: '오토모티브 이미지센서',
          },
          {
            contentTitle: '경험',
          },
        ],
      },
      {
        subtitle: '전력관리 IC',
        subtitleIcons: 'icon-gnb-power-ic.svg',
        content: [
          {
            contentTitle: '모바일 전력관리 IC',
          },
          {
            contentTitle: '액세서리 전력관리 IC',
          },
        ],
      },
      {
        subtitle: 'SSD',
        subtitleIcons: 'icon-gnb-ssd.svg',
        content: [
          {
            contentTitle: 'PC SSD',
          },
          {
            contentTitle: '데이터 센터 SSD',
          },
        ],
      },
      {
        subtitle: 'Consumer Storage',
        subtitleIcons: 'icon-gnb-consumerstorage.svg',
        content: [
          {
            contentTitle: '내장 SSD',
          },
          {
            contentTitle: '포터블 SSD',
          },
          {
            contentTitle: '데이터센터 SSD',
          },
        ],
      },
      {
        subtitle: '디스플레이 IC',
        subtitleIcons: 'icon-gnb-displayic.svg',
        content: [
          {
            contentTitle: '모바일 DDI',
          },
          {
            contentTitle: '패널 DDI',
          },
        ],
      },
      {
        subtitle: 'LED',
        subtitleIcons: 'icon-gnb-led.svg',
        content: [],
      },
      {
        subtitle: 'eStorage',
        subtitleIcons: 'icon-gnb-estorage.svg',
        content: [
          {
            contentTitle: 'UFS',
          },
          {
            contentTitle: 'eMMC',
          },
        ],
      },
      {
        subtitle: '프로세서',
        subtitleIcons: 'icon-gnb-processor.svg',
        content: [
          {
            contentTitle: '모바일 프로세서',
          },
          {
            contentTitle: '오토모티브 프로세서',
          },
          {
            contentTitle: '웨어러블 프로세서',
          },
          {
            contentTitle: '모뎀',
          },
          {
            contentTitle: 'RF',
          },
        ],
      },
      {
        subtitle: '보안 솔루션',
        subtitleIcons: 'icon-gnb-securitysolution.svg',
        content: [
          {
            contentTitle: '결제용 칩',
          },
          {
            contentTitle: '지문인증카드 솔루션',
          },
          {
            contentTitle: 'NFC',
          },
          {
            contentTitle: 'eSE / eSIM',
          },
          {
            contentTitle: 'IoT SE',
          },
        ],
      },
    ],
  },
  {
    title: '파운드리',
    submenu: [
      {
        subtitle: 'Process TechNology',
        subtitleIcons: 'icon-gnb-processtechnology.svg',
        content: [
          {
            contentTitle: 'Advanced Node',
          },
        ],
      },
      {
        subtitle: 'Advanced Package',
        subtitleIcons: 'icon-gnb-advanced-package.png',
        content: [],
      },
      {
        subtitle: '응용 서비스',
        subtitleIcons: 'icon-gnb-applicationspecificservice.svg',
        content: [
          {
            contentTitle: 'HPC / AI',
          },
          {
            contentTitle: 'Connectivity',
          },
          {
            contentTitle: '오토모티브',
          },
          {
            contentTitle: 'IoT',
          },
        ],
      },
      {
        subtitle: 'SAFE',
        subtitleIcons: 'icon-gnb-safe.svg',
        content: [
          {
            contentTitle: 'IP',
          },
          {
            contentTitle: 'EDA',
          },
          {
            contentTitle: '클라우드',
          },
          {
            contentTitle: '디자인 서비스',
          },
        ],
      },
      {
        subtitle: '제조',
        subtitleIcons: 'icon-gnb-manufacturing.svg',
        content: [
          {
            contentTitle: 'MPW 서비스',
          },
        ],
      },
    ],
  },
  {
    title: '인사이트',
    submenu: [
      {
        subtitle: '토픽',
        subtitleIcons: 'icon-gnb-topic.svg',
        content: [
          {
            contentTitle: '5G',
          },
          {
            contentTitle: 'AI',
          },
          {
            contentTitle: '빅 데이터',
          },
        ],
      },
      {
        subtitle: '응용처',
        subtitleIcons: 'icon-gnb-application.svg',
        content: [
          {
            contentTitle: '스마트폰',
          },
          {
            contentTitle: '서버 및 네트워크',
          },
          {
            contentTitle: 'PC',
          },
          {
            contentTitle: 'TV & 게이밍',
          },
          {
            contentTitle: '오토모티브',
          },
        ],
      },
      {
        subtitle: '기술',
        subtitleIcons: 'icon-gnb-technology.svg',
        content: [
          {
            contentTitle: 'PIM',
          },
          {
            contentTitle: 'EUV',
          },
        ],
      },
    ],
  },
  {
    title: '고객지원',
    submenu: [
      {
        subtitle: '품질 지원',
        subtitleIcons: 'icon-gnb-qualitysupport.svg',
        content: [
          {
            contentTitle: '품질 관리',
          },
          {
            contentTitle: '고객 서비스',
          },
          {
            contentTitle: '규정 정보',
          },
        ],
      },
      {
        subtitle: 'Contact Info',
        subtitleIcons: 'icon-gnb-contactinfo.svg',
        content: [
          {
            contentTitle: '글로벌 네트워크',
          },
        ],
      },
      {
        subtitle: '도구 & 자료',
        subtitleIcons: 'icon-gnb-tools-resources.svg',
        content: [
          {
            contentTitle: '제품 찾기',
          },
          {
            contentTitle: '기술 자료',
          },
          {
            contentTitle: '반도체 이야기',
          },
          {
            contentTitle: '용어사전',
          },
        ],
      },
      {
        subtitle: 'Consumer Storage 지원',
        subtitleIcons: 'icon-gnb-consumerstoragesuport.svg',
        content: [
          {
            contentTitle: '도구 및 소프트웨어',
          },
          {
            contentTitle: '문서',
          },
          {
            contentTitle: 'FAQs',
          },
          {
            contentTitle: '워런티',
          },
        ],
      },
    ],
  },
  {
    title: '지속가능경영',
    submenu: [
      {
        subtitle: '환경',
        subtitleIcons: 'icon-gnb-environment.svg',
        content: [
          {
            contentTitle: '반도체친환경성과지표',
          },
          {
            contentTitle: '친환경 반도체',
          },
          {
            contentTitle: '기후 변화 대응',
          },
          {
            contentTitle: '자원 순환',
          },
          {
            contentTitle: '환경 보전',
          },
        ],
      },
      {
        subtitle: '지속 가능한 공급망',
        subtitleIcons: 'icon-gnb-sustainablesupplychain.svg',
        content: [
          {
            contentTitle: '상생협렵강화',
          },
          {
            contentTitle: '환경안전지원',
          },
          {
            contentTitle: '공급망 관리',
          },
        ],
      },
      {
        subtitle: '노동과 인권',
        subtitleIcons: 'icon-gnb-labor-humanright.svg',
        content: [
          {
            contentTitle: '노동인권정책',
          },
          {
            contentTitle: '다양성과 포용',
          },
          {
            contentTitle: '안전',
          },
          {
            contentTitle: '보건',
          },
        ],
      },
      {
        subtitle: '사회공헌',
        subtitleIcons: 'icon-gnb-corporatecitizenship.svg',
        content: [
          {
            contentTitle: '임직원교육재능기부',
          },
          {
            contentTitle: '지역사회상생',
          },
          {
            contentTitle: '지역사회인프라',
          },
        ],
      },
    ],
  },
  {
    title: '뉴스룸',
    submenu: [
      {
        subtitle: '뉴스',
        subtitleIcons: 'icon-gnb-news.svg',
        content: [],
      },
      {
        subtitle: '이벤트',
        subtitleIcons: 'icon-gnb-event.svg',
        content: [],
      },
      {
        subtitle: '테크블로그',
        subtitleIcons: 'icon-gnb-techblog.svg',
        content: [],
      },
    ],
  },
  {
    title: '채용',
    submenu: [],
  },
];

interface IProps {
  items: MenuItemProps;
}

const MenuWrapper = styled.div`
  display: flex;
`;

const MenuItem = styled.li`
  display: flex;
  padding: 0 8px 40px 8px;
  height: 100%;
`;

const CustomLink = styled(StyledLink)`
  display: inline-block;
  width: 100%;
  height: 36px;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 20px;
    border-bottom: solid 2px #fff;
    transform: scaleX(0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover {
    &::after {
      transform: scaleX(1);
      width: 100%;
    }
  }
`;

const DropdownMenu = css`
  display: flex;
  width: 100%;
  &:hover {
    .subMenuContainer {
      display: block;
    }
  }
`;

function MenuItems({ items }: IProps) {
  return (
    <MenuWrapper css={DropdownMenu}>
      <MenuItem className='menu-items'>
        {items.submenu.length >= 1 ? (
          <>
            <CustomLink to='/#'>{items.title}</CustomLink>
            <MenuDropdown submenus={items.submenu} />
          </>
        ) : (
          <CustomLink to='/#'>{items.title}</CustomLink>
        )}
      </MenuItem>
    </MenuWrapper>
  );
}

export default MenuItems;
