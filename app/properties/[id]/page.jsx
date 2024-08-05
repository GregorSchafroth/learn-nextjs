"use client";
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
    
  return ( <div>
    Property Page {params.id} {searchParams.get('name')} {pathname}
  </div> );
}
 
export default PropertyPage;