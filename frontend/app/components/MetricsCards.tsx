import {MainCard, Title, Value} from './MetricsCards.style';

interface MetricsCardProps {
  title: string;
  value: number | string;
  color: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, color }) => {
  return (
    <div className={MainCard}>
        <h2 className={Title}>{title}</h2>
        <p className={`${Value} ${color}`}>{value}</p>
    </div>    
  );
};

export default MetricsCard;