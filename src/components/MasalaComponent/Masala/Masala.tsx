import { Box, List, ListItem, Typography } from "@mui/material";
import styles from "./masala.module.css";
import WhatIsZakat from "../WhatIsZakat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ZakatCondition from "../ZakatCondition";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ZakatNisab from "../ZakatNisab";
import ZakatAmount from "../ZakatAmount";
import ZakatAssets from "../ZakatAssets";
import ZakatNonAssets from "../ZakatNonAssets";
import ZakatReceivers from "../ZakatReceivers";
import ZakatNonReceivers from "../ZakatNonReceivers";
import ZakatHowToGive from "../ZakatHowToGive";

const QuestionAnswers = [
  {
    title: "যাকাত কী",
    id: "what-is-zakat",
    component: <WhatIsZakat />,
  },
  {
    title: "যাকাত যাদের উপর ফরয",
    id: "zakat-condition",
    component: <ZakatCondition />,
  },
  {
    title: "যাকাতের নিসাব",
    id: "zakat-nisab",
    component: <ZakatNisab />,
  },
  {
    title: "যাকাতের পরিমাণ",
    id: "zakat-amount",
    component: <ZakatAmount />,
  },
  {
    title: "যেভাবে যাকাত দিতে হবে",
    id: "zakat-how-to-give",
    component: <ZakatHowToGive />,
  },
  {
    title: "যাকাতযোগ্য অর্থ-সম্পদ",
    id: "zakat-assets",
    component: <ZakatAssets />,
  },
  {
    title: "যেসব অর্থ-সম্পদের যাকাত নেই",
    id: "zakat-non-assets",
    component: <ZakatNonAssets />,
  },
  {
    title: "যাদেরকে যাকাত দেওয়া যাবে",
    id: "zakat-receivers",
    component: <ZakatReceivers />,
  },
  {
    title: "যাদেরকে যাকাত দেওয়া যাবে না",
    id: "zakat-non-receivers",
    component: <ZakatNonReceivers />,
  },
];

export const Masala = () => {
  return (
    <Box className={styles["page-wrapper"]}>
      <Box className={styles["masala"]}>
        {QuestionAnswers.map((qa, index) => {
          return (
            <Box key={index} sx={{ mb: 4 }} id={qa.id}>
              <Box color={"primary.main"} className={styles["masala-title"]}>
                <BookmarkIcon fontSize={"medium"} />
                <Typography variant={"h5"}>{qa.title}</Typography>
              </Box>

              {qa.component}
            </Box>
          );
        })}
      </Box>

      <Box className={styles["index"]}>
        <List dense={true}>
          {QuestionAnswers.map((qa, index) => (
            <ListItem key={index}>
              <AnchorLink href={`#${qa.id}`} offset={105} className={styles["masala-index-item"]}>
                <BookmarkIcon fontSize={"small"} />
                <Typography color={"primary.main"}>{qa.title}</Typography>
              </AnchorLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
