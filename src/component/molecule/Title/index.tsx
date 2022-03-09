export interface TitleProps {
  title: string;
  subtitle: string;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => (
  <div>
    <h2 data-testid='title-title'>{title}</h2>
    <h3 data-testid='title-subtitle'>{subtitle}</h3>
  </div>
);
