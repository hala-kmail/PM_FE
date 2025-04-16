import { useTranslation } from "react-i18next";
import { theme } from "../../theme/color";

import Total_Projects_Icon from "../../assets/Total_Projects.svg";
import Total_Initiative_Icon from "../../assets/Total_Initiative_Projects.svg";
import Total_Committee_Projects from "../../assets/Total_Committee_Projects.svg";
import Achievements from "../../assets/Achievements.svg";
import Project_in_this_month from "../../assets/Project_in_this_month.svg";

const cardsData = [
  {
    icon: Total_Projects_Icon,
    value: 33,
    labelKey: "home.cards.totalProjects",
  },
  {
    icon: Total_Initiative_Icon,
    value: 30,
    labelKey: "home.cards.totalInitiativeProjects",
  },
  {
    icon: Total_Committee_Projects,
    value: 30,
    labelKey: "home.cards.totalCommitteeProjects",
  },
  {
    icon: Achievements,
    value: '35%',
    labelKey: "home.cards.ofAchievements",
  },
  {
    icon: Project_in_this_month,
    value: 4,
    labelKey: "home.cards.projectTnTthisMonth",
  },
];

const StatisticCard = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          style={{ backgroundColor: theme.lightBackground }}
          className="p-6 rounded-lg relative"
        >
          <img
            src={card.icon}
            alt="Card Icon"
            className="h-16 w-16 rounded-lg p-2"
            style={{ border: `0.5px solid ${theme. buttonGraytext}` }}
          />
          <div className="mt-4">
            <h3
              className="text-3xl font-bold mt-4 mb-4"
              style={{ color: theme.text }}
            >
              {card.value}
            </h3>
            <p
              className="text-base font-normal"
              style={{ color: theme.text }}
            >
              {t(card.labelKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticCard;
