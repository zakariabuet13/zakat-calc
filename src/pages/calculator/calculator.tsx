import { Alert, Box } from "@mui/material";
import CalculatorComponent from "../../components/CalculatorComponent/Calculator";
import Layout from "../../components/layout";

export const Calculator = () => {
  return (
    <Layout>
      <Box mb={4}>
        <Alert severity="info" sx={{ mb: 1 }}>
          স্বর্ণ, রূপা এর মূল্য <strong>১ রমজান, ১৪৪৫</strong> তারিখের বাজার মূল্য ধরে হিসেব করা হয়েছে। নিসাব এর পরিমাণ
          নির্ণয়ে সনাতন রূপার মূল্য ধরা হয়েছে।
        </Alert>
        <Alert severity="info">
          এখানে যাকাতের খাতের সাধারণ/প্রচলিত/কমন বিষয়ের হিসেব করার চেষ্টা করা হয়েছে। কোনো বিষয়ে আরো গভীরভাবে হিসেব করতে
          চাইলে অবশ্যই নিকটস্থ আলেম এর সাথে যোগাযোগ করে নিবেন।
        </Alert>
      </Box>

      <CalculatorComponent />
    </Layout>
  );
};
