"use client";
import PropertyDescription from "../property/components/PropertyDescription"

export default function Home() {

    const handleEdit = () => {
        console.log("Edit clicked");
    };

    const handleDelete = () => {
        console.log("Delete clicked");
    };

  return (
      <div className="w-[72.72vw] h-[474px] bg-blue-600 fixed bottom-0">
        <p> hello</p>
            {/* <PropertyDescription
                imageUrl="https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                title="Lorem ipsum dolor sit amet"
                updatedAt="29 Oct 2024 22:45"
                rating={4.5}
                reviews={99}
                location="254 Phaya Thai Rd, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330"
                size="5,000 Square meter"
                price="12,000 Bath per month"
                onEdit={handleEdit}
                onDelete={handleDelete}
            /> */}
      </div>
      
  );
}
