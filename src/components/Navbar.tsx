import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Cctv } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg background py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
        <div className="container flex items-center justify-between">
          <Link href='/'><Cctv className='text-slate-200'/></Link>
          <Link className={buttonVariants()} href='/sign-in'>Sign In</Link>
        </div>
    </div>
  );
};

export default Navbar;
