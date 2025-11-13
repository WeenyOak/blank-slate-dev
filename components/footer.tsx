import Logo from "@/components/logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-slate-600">
              We design, build, and launch high-polish web apps for founders and
              teams. From idea to production.
            </p>
            <div className="mt-6 flex gap-4">
              
                href="#"
                className="text-slate-400 transition-colors hover:text-teal"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              
                href="#"
                className="text-slate-400 transition-colors hover:text-teal"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              
                href="#"
                className="text-slate-400 transition-colors hover:text-teal"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  About
                </a>
              </li>
              <li>
                
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  Work
                </a>
              </li>
              <li>
                
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  Process
                </a>
              </li>
              <li>
                
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                
                  href="mailto:hello@blankslatedev.com"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  hello@blankslatedev.com
                </a>
              </li>
              <li>
                
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  Schedule a call
                </a>
              </li>
              <li>
                
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {currentYear} Blank Slate Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}