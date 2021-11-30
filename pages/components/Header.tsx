import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const activePage = router.pathname;

  return (
    <div className="flex-row bg-white px-10 py-5 flex ">
      <div className="space-x-8">
        <Link href="/">
          <a className="font-medium hover:text-green-500">Home</a>
        </Link>
      </div>
    </div>
  );
}
