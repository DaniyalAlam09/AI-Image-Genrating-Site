import { React, useState, useEffect } from "react";
import Form from "../Components/Form";
import Loader from "../Components/Loader";
import Card from "./../Components/Card";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

function Home() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [search, setSearch] = useState("55");
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Helo World
        </p>
      </div>

      <div className="mt-16">
        <Form />
      </div>
      <div className="mt-10">
        {loading ? (
          <Loader />
        ) : (
          <>
            {search && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{search}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {search ? (
                <RenderCards data={[]} title="No Results Found" />
              ) : (
                <RenderCards data={[]} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;
