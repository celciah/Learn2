import Link from 'next/link';
import { HomeIcon, UserGroupIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline';

export default function NavLinks() {
  return (
    <nav className="space-y-2">
      <Link href="/dashboard" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
        <HomeIcon className="w-5 h-5" />
        <span>Dashboard</span>
      </Link>
      <Link href="/customers" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
        <UserGroupIcon className="w-5 h-5" />
        <span>Customers</span>
      </Link>
      <Link href="/invoices" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
        <ReceiptPercentIcon className="w-5 h-5" />
        <span>Invoices</span>
      </Link>
    </nav>
  );
}

