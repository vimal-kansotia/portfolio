import PortfolioApp from './PortfolioApp';
import { getPortfolioData } from './api/portfolio/route';

export default async function Home() {
  const initialContent = await getPortfolioData();
  return <PortfolioApp initialContent={initialContent} />;
}
