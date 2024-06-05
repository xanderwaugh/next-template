// * NextJS Types
interface RootLayoutProps {
  children: React.ReactNode;
}
interface PageParams {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}
interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// * My Types
interface NavItemProps {
  label: string;
  href: string;
  subLabel?: string;
  children?: Array<NavItemProps>;
  prefetch?: boolean;
}

interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
type IconType = (props: IconBaseProps) => JSX.Element;

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  label: string;
}
