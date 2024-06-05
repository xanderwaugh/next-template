import { Toaster as SonnerToaster } from "sonner";

interface ToasterProps {
  font?: string;
}

export const Toaster: React.FC<ToasterProps> = ({ font }) => {
  return (
    <SonnerToaster
      expand
      visibleToasts={4}
      // TODO: Change Color
      className="bg-slate-800 text-white"
      style={{ fontFamily: font }}
      position="bottom-right"
      richColors
      toastOptions={{ style: { fontFamily: font } }}
      theme="dark"
    />
  );
};

export default Toaster;
