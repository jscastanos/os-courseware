import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const activePage = router.pathname;

  return (
    <div className="flex-row bg-white px-10 py-5 flex ">
      <div className="space-x-8">
        <Link href="/">
          <a
            className={classNames("font-medium hover:text-green-500", {
              "text-green-400": !activePage.includes("/courses"),
            })}
          >
            Home
          </a>
        </Link>
        <Link href="/courses">
          <a
            className={classNames("font-medium hover:text-green-500", {
              "text-green-400": activePage.includes("/courses"),
            })}
          >
            Courses
          </a>
        </Link>
      </div>
    </div>
  );
}
