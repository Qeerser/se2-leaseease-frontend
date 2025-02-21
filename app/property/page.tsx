'use client';

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MiddlePage from "./components/MiddlePage";
// import { Property } from "../../type/Property";
import { Property} from "@/store/propertySlice";
import { useAuth } from "@/hooks/useAuth";


import LoadPage from "@/components/ui/loadpage";

export default function PropertyPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const {loading} = useAuth();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    loading ? (<LoadPage/>) :
    (
    <div className="flex w-full h-full flex-col items-center rounded-[0.375rem] bg-slate-200">
      <Header />
      <div className="flex justify-center items-center flex-1 self-stretch">
        <Sidebar
          setSelectedProperty={setSelectedProperty}
        />
        {/* KNOTT */}
        <div className="flex p-[2rem] flex-col items-start gap-[0.625rem] flex-1 self-stretch bg-white">
          <MiddlePage
            selectedProperty={selectedProperty}
            setSelectedProperty={setSelectedProperty}
          />
        </div>
        {/* KNOTT */}
      </div>
      {/* <Slider_Request /> */}
    </div>
  ));
}
