import { useTranslation } from "react-i18next";

export default function useDateFormatter() {
  const { i18n } = useTranslation();

  const monthNames = {
    "kz-KZ": [
      "Қаң",
      "Ақп",
      "Нау",
      "Сәу",
      "Мам",
      "Мау",
      "Шіл",
      "Там",
      "Қыр",
      "Қаз",
      "Қар",
      "Жел",
    ],
    "kr-KR": [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    "ru-RU": [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    "en-US": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  let lang = "en-US";
  switch (i18n.language) {
    case "en":
      lang = "en-US";
      break;
    case "kz":
      lang = "kz-KZ";
      break;
    case "kr":
      lang = "kr-KR";
      break;
    case "ru":
      lang = "ru-RU";
      break;
    default:
      break;
  }

  const formatDate = (date) => {
    if (!date) return "";

    try {
      const month = date.getMonth();
      const year = date.getFullYear();
      const monthName = monthNames[lang]?.[month] || monthNames["en-US"][month];
      return `${monthName} ${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

  return formatDate;
}
