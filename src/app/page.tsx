import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/dark-toggle";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { CustomDrawer } from "@/components/CustomDrawer";


export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center py-5">
        <ModeToggle />
      </header>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-row justify-center items-center w-full bg-amber-700">
          <section className="text-center flex-initial space-y-20 w-8/12 flex-col w-8/10 m-1 bg-green-500/50 gap-2">

            <Button variant={"outline"}>Space-Ship-Forum</Button>
            <h1>The initial posts are settled here below</h1>

            <CustomDrawer title="POST DYNAMIC 1" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 2" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 3" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 4" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 5" description="POST INFORMATION" />


          </section>

          <section className="flex-initial w-3/12 bg-fuchsia-600 h-72">
            Section of widgets
          </section>

        </div>

        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

      </main >
    </>
  );
}
