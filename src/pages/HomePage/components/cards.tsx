import bulk from '../../../assets/money.png';
import salary from '../../../assets/salary.png';
import Total_projects from "../../../assets/case.png";
import { useTranslation } from "react-i18next";
import { theme } from '../../../theme/color';
 // عدّل المسار حسب مكان الثيم

const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Card 1 */}
      <div style={{ backgroundColor: theme.cardColor }} className="p-6 rounded-lg relative">
        <img
          src={bulk}
          alt="Logo"
          className="h-16 w-16 rounded-lg p-2"
          style={{ border: `0.5px solid ${theme.buttonGrayborder}` }}
        />
        <div className="mt-4">
          <p style={{ color: theme.buttonGraytext }}>{t("home.cards.totalEstimated")}</p>
          <h3 className="text-3xl font-semibold mt-4" style={{ color: theme.primary }}>7.7M</h3>
        </div>
      </div>

      {/* Card 2 */}
      <div style={{ backgroundColor: theme.cardColor }} className="p-6 rounded-lg relative">
        <img
          src={salary}
          alt="Logo"
          className="h-16 w-16 rounded-lg p-2"
          style={{ border: `0.5px solid ${theme.buttonGrayborder}` }}
        />
        <div className="mt-4">
          <p style={{ color: theme.buttonGraytext }}>{t("home.cards.totalPayment")}</p>
          <h3 className="text-3xl font-semibold mt-4" style={{ color: theme.primary }}>7.7M</h3>
        </div>
      </div>

      {/* Card 3 */}
      <div style={{ backgroundColor: theme.cardColor }} className="p-6 rounded-lg relative">
        <img
          src={Total_projects}
          alt="Logo"
          className=" h-16 w-16 rounded-lg p-2"
          style={{ border: `0.5px solid ${theme.buttonGrayborder}` }}
        />
        <div className="mt-4">
          <p style={{ color: theme.buttonGraytext }}>{t("home.cards.totalProjects")}</p>
          <div className="flex flex-row">
            <h3 className="text-3xl font-semibold mt-4" style={{ color: theme.primary }}>7.7</h3>
            <span className="mt-6 mr-5">{t("home.projects")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
