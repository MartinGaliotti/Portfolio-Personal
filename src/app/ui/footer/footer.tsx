import styles from "./footer.module.css";
import Link from "next/link";
import routes from "../../lib/routes";
import UserPanel from "@/app/ui/userPanel/userPanel";
import UserPanelSkeleton from "@/app/ui/skeletons/userPanel/UserPanelSkeleton";
import { Suspense } from "react";

const Footer = async () => {
  return (
    <footer className={styles.footer}>
      <Suspense fallback={<UserPanelSkeleton />}>
        <UserPanel />
      </Suspense>
      <Link href={routes.home}>Inicio</Link>
      <Link href={routes.projects}>Proyectos</Link>
      <Link href={routes.experience}>Experiencias</Link>
      <Link href={routes.skills}>Habilidades</Link>
      <Link href={routes.technologies}>Tecnologias</Link>
    </footer>
  );
};

export default Footer;
