import Image from 'next/image';

const badgeData = [
  { badgeUrl: '/image/badge-1.png', badgeName: 'Tier 1' },
  { badgeUrl: '/image/badge-2.png', badgeName: 'Tier 2' },
  { badgeUrl: '/image/badge-3.png', badgeName: 'Tier 3' },
  { badgeUrl: '/image/badge-4.png', badgeName: 'Tier 4' },
  { badgeUrl: '/image/badge-5.png', badgeName: 'Tier 5' },
  { badgeUrl: '/image/badge-6.png', badgeName: 'Tier 6' },
];

const HeroSection = () => {
  return (
    <div className="bg-custom-gradient py-[10px] px-[10px] sm:py-[17px] sm:px-[40px]  flex flex-col sm:flex-row justify-between gap-[100px] sm:gap-0 items-center border border-[#313856]">
      <div className="flex flex-col gap-3 max-w-[425px]">
        <h1 className="text-2xl leading-6 font-bold text-[#FCFCFD]">Unlock Rewards with the Copin Referral Program</h1>
        <p className="text-[13px] leading-6 font-normal text-[#C0C0C9]">
          Earn rebates and commissions by inviting friends. <br />
          Grow your network and benefit from our 6-tier reward system.
        </p>
        <button title="view" className="text-[13px] leading-6 text-[#97CFFD] flex items-center gap-1 cursor-pointer">
          View referral Ranking <Image src="/icon/arrow-right.svg" width={16} height={16} alt="arrow-right" />
        </button>
      </div>

      <div>
        <div>
          <Image src="/image/background-triangle.png" width={363} height={181} alt="bg-view" />
        </div>

        <div className="flex gap-6 relative mt-[10px]">
          <div className="absolute top-[-220px] right-[0] md:right-[-5px] lg:top-[-215px] lg:right-[48px] z-0">
            <div className="absolute rounded-[3px]  text-white p-2 shadow backdrop-blur-sm w-fit custom-blur custom-circle top-[130px] left-[20px] sm:top-[140px] lg:top-[125px] lg:left-[20px]">
              <p className="text-[9px] leading-[13px] font-normal text-[#FCFCFD]">
                F0 (Rebate): 5% <br />
                F1 (Commission): 35% <br />
                F2 (Commission): 10%
              </p>
            </div>
            <Image src="/image/light.png" alt="light" width={140} height={271} />
          </div>

          {badgeData.map((badge, index) => (
            <div key={index} className="flex flex-col justify-between min-h-[56px] z-10">
              <Image src={badge.badgeUrl} width={31} height={31} alt={badge.badgeName} />
              <p className="text-[13px] leading-3 font-normal text-center text-[#FCFCFD]">{badge.badgeName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
