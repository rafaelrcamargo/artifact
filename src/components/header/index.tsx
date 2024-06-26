import { Menu } from "@/components/header/menu"
import { Toggle } from "./toggle"

export const Header = () => (
  <nav className="fixed inset-0 z-50 h-14 items-center justify-between border-b border-border/50 bg-muted/10 backdrop-blur-md">
    <div className="relative m-auto flex h-14 w-full max-w-7xl items-center justify-between px-8">
      <span className="center gap-2 font-serif text-lg font-black">
        <svg className="w-7 fill-muted-foreground" viewBox="0 0 256 256">
          <path d="M200,154a29.87,29.87,0,0,0-19.5,7.23L154.88,141.3A29.83,29.83,0,0,0,158,128a30.52,30.52,0,0,0-.22-3.6L174,119a30,30,0,1,0-4-15,30.52,30.52,0,0,0,.22,3.6L154,113a29.91,29.91,0,0,0-32.42-14.31l-8.14-18.3a30,30,0,1,0-11,4.88l8.14,18.3A29.92,29.92,0,0,0,102.06,143L74,168a30.08,30.08,0,1,0,8,9L110,152a29.91,29.91,0,0,0,37.47-1.23l25.62,19.93A30,30,0,1,0,200,154Zm0-68a18,18,0,1,1-18,18A18,18,0,0,1,200,86ZM78,56A18,18,0,1,1,96,74,18,18,0,0,1,78,56ZM56,210a18,18,0,1,1,18-18A18,18,0,0,1,56,210Zm72-64a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm72,56a18,18,0,1,1,18-18A18,18,0,0,1,200,202Z"></path>
        </svg>{" "}
        Artifact
      </span>

      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <Menu />
      </div>

      <Toggle />
    </div>
  </nav>
)
