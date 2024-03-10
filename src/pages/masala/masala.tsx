import { Alert, Box } from "@mui/material";
import Layout from "../../components/layout";
import MasalaComponent from "../../components/MasalaComponent/Masala";

export const Masala = () => {
  return (
    <Layout className="masala-page">
      <Box mb={4}>
        <Alert severity="info">
          যাকাতের মূল বিষয় অর্থাৎ যাকাত ফরয হওয়া সম্পর্কে কোনো মতভেদ না থাকলেও যাকাত সংক্রান্ত কিছু কিছু মাসআলায় আলেমদের
          মধ্যে মতভিন্নতা রয়েছে। কোনো বিষয়ে সংশয় থাকলে অবশ্যই নিকটস্থ আলেম এর সাথে যোগাযোগ করে নিবেন।
        </Alert>
      </Box>

      <MasalaComponent />
    </Layout>
  );
};
