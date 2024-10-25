import Image from 'next/image';

const featureData = [
  {
    logo: '/image/system-image.png',
    title: '1. Two-Level Referral System',
    description: 'Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)',
  },
  {
    logo: '/image/comunicate-image.png',
    title: '2. Earn Rebates & Commissions',
    description: 'Earn rebates on your trades and commissions from F1 and F2.',
  },
  {
    logo: '/image/reward-image.png',
    title: '3. Claim Daily Rewards',
    description: 'Rewards are credited after trades close and claimable daily at 0:00 UTC.',
  },
  {
    logo: '/image/medal-image.png',
    title: '4. Referral Tier System',
    description: 'Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days',
  },
];

const FeatureSection = () => {
  return (
    <div className="p-[10px] flex flex-col gap-5 mt-5 sm:mt-0">
      <h2 className="text-base font-medium text-[#FCFCFD] flex gap-2">
        <Image src="/icon/lamp-icon.svg" width={24} height={24} alt="lamp-icon" /> How It Works?
      </h2>

      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap justify-between">
        {featureData.map((feature, index) => (
          <div key={index} className="flex flex-col gap-4 w-[252px] border border-[#313856] rounded-2xl p-4">
            <Image src={feature.logo} width={46} height={46} alt="logo" />
            <h3 className="text-base font-medium text-[#FCFCFD]">{feature.title}</h3>
            <p className="text-[13px] leading-6 font-normal text-[#C0C0C9]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
