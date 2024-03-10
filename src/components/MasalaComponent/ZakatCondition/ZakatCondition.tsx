import { Box, Typography } from "@mui/material";

export const ZakatCondition = () => {
  return (
    <Box>
      <Typography mb={1}>
        <strong>১. স্বাধীন হওয়াঃ</strong> গোলাম-বাঁদীর উপর যাকাত ফরয নয়।
      </Typography>

      <Typography mb={1}>
        <strong>২. প্রাপ্ত বয়স্ক হওয়াঃ</strong> অপ্রাপ্ত বয়স্কের উপর যাকাত ফরয নয়।
      </Typography>

      <Typography mb={1}>
        <strong>৩. জ্ঞান-বুদ্ধি সম্পন্ন হওয়াঃ</strong> পাগল/বুদ্ধি প্রতিবন্ধির উপর যাকাত ফরয নয়।
      </Typography>

      <Typography mb={1}>
        <strong>৪. মুসলমান হওয়াঃ</strong> অমুসলিম নর-নারীর উপর যাকাত ফরয নয়।
      </Typography>

      <Typography mb={1}>
        <strong>৫. পূর্ণ মালিকানা হওয়াঃ</strong> যাতে অন্যের কোন অধিকার বা দায় নাই, তাতে যথেচ্ছা হস্তক্ষেপ ও লেনদেন করতে
        পারে, তার বর্থিতাংশ, লভ্যাংশের অধিকারী হয়।
      </Typography>

      <Typography mb={1}>
        <strong>৬. নিসাবঃ</strong> শরীয়ত নির্ধারিত পরিমাণ যাকাতযোগ্য অর্থ-সম্পদের অধিকারী হওয়া।
      </Typography>

      <Typography mb={1}>
        <strong>৭. বছর পূর্তিঃ</strong> নিসাব পরিমাণ অর্থ-সম্পদ এক চান্দ্র বছর বা ৩৫৪ দিন মালিকানায় থাকা। বছরের শুরু ও
        শেষে নিসাব পূর্ণ থাকলে যাকাত আদায় করতে হবে। মাঝে নিসাব কমে যাওয়া ধর্তব্য নয়। অবশ্য বছরের মাঝে সম্পূর্ণ সম্পদ
        নষ্ট হয়ে যাওয়ার পর পুনরায় যদি নিসাব পরিমাণ সম্পদের মালিক হয় তবে ঐ সময় থেকে নতুন করে বছরের হিসাব আরম্ভ হবে
        এবং এক বছর পূর্ণ হওয়ার পর যাকাত আদায় করতে হবে।
      </Typography>

      <Typography mb={1}>
        <strong>৮. মানুষের প্রাপ্য ঋণ মুক্ত হওয়া</strong>
      </Typography>

      <Box mb={1}>
        <strong>৯. মৌলিক প্রয়োজনের অতিরিক্ত হওয়াঃ</strong> মৌলিক প্রয়োজন দ্বারা উদ্দেশ্য হল,
        <ol style={{listStyleType: 'bengali', paddingLeft: '3rem', marginBottom: '0.5rem'}}>
          <li>
            মানুষের জীবন রক্ষাকারী বস্তু যেমন, অন্ন, বস্ত্র, বাসস্থান, ঘরের প্রয়োজনীয় আসবাবপত্র, ব্যবহার্য সামগ্রী, উপার্জনের উপকরণ ও যন্ত্রাদি, যুদ্ধাস্ত্র, বাহন, জ্ঞানার্জন-লেখালেখির বই-পত্রাদি, ইত্যাদি।
          </li>
          <li>
            পরিবারের সদস্যদের ভরণ-পোষণ (যাদের ভরণ-পোষণ দেওয়া ওয়াজিব)
          </li>
          <li>ঋণ</li>
        </ol>
        উক্ত তিন ধরণের প্রয়োজনের অতিরিক্ত নামী তথা বর্ধনশীল অর্থ-সম্পদের উপর যাকাত ফরয।
      </Box>
    </Box>
  );
};