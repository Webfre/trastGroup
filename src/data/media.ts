import { publicAsset } from "./assets";

export const media = {
  logoHeader: publicAsset("assets/brand/logo-header-02.png"),
  logoFooter: publicAsset("assets/brand/logo-white.png"),
  logoWorkspace: publicAsset("assets/brand/logo-workspace.svg"),
  contactsHero: publicAsset("assets/team/contacts-hero.jpg"),
  heroTeam: publicAsset("assets/team/hero-team.webp"),
  aboutTeam: publicAsset("assets/team/about-team-final.webp"),
  team: {
    katya: publicAsset("assets/team/katya-final.webp"),
    kristina: publicAsset("assets/team/kristina-final.webp"),
    lena: publicAsset("assets/team/lena-final.webp"),
    nastya: publicAsset("assets/team/nastya-final.webp"),
    sveta: publicAsset("assets/team/sveta-final.webp"),
  },
} as const;
