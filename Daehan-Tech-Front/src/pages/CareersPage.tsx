import SubHeader from '@components/molecules/SubHeader/SubHeader';
import InnerTitle from '@components/organisms/Careers/InnerTitle/InnerTitle';
import OverviewList from '@components/organisms/Careers/OverviewList/OverviewList';
import SectionContents from '@components/organisms/Careers/SectionContents/SectionContents';
import SectionHead from '@components/organisms/Careers/SectionHead/SectionHead';

function CareersPage() {
  return (
    <div>
      <SubHeader />
      <div>
        <InnerTitle />
        <OverviewList />
        <SectionHead
          title='직무소개'
          description='하고 싶은 일을 할 수 있는 기회를 대한테크에서 찾을 수 있습니다. 이곳이 바로 여러분이 자신의 직무 영역에서 전문가로 성장할 수 있는
          곳입니다.'
        />
        <SectionContents />
      </div>
    </div>
  );
}

export default CareersPage;
