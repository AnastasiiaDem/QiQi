import React from "react";

const qaItem = "flex flex-col qa-width max-md:w-full max-md:ml-0";
const qaTitle = "text-slate-50 text-xl max-md:w-full";
const qaAnswer = "text-slate-50 opacity-60 mt-5";

const QaItem = ({title, answer}) => (
  <div className={qaItem}>
    <h3 className={qaTitle}>{title}</h3>
    <p className={qaAnswer}>{answer}</p>
  </div>
);

export default function Ethos() {
  return (
    <div className="flex flex-col">
      <section
        className="items-start bg-[#000] flex w-full flex-col px-16 py-12 max-md:w-full max-md:px-5">
        <div
          className="flex w-[50%] flex-col ml-20 mt-14 mb-11 max-md:w-full max-md:ml-2.5 max-md:my-10">
          <h1 className="gradient-text text-3xl">Our Ethos</h1>
          <h2 className="justify-center text-slate-50 text-4xl font-bold mt-16 max-lg:text-3xl max-md:mt-10">
            Harmony in Nature, Innovation in Science. QiQi believe that beauty should transcend traditional boundaries,
            and our
            ethics revolve around creating products that emphasize your unique essence.
          </h2>
        </div>
      </section>
      <section id="FAQ" className="bg-[#000] p-16 max-md:px-5">
        <h2 className="gradient-text text-5xl font-bold max-md:text-4xl">Queries from the Space</h2>
        <div className="flex flex-wrap mx-auto my-16 w-[80%] gap-16 max-md:flex-col max-md:mt-10">
          <QaItem
            title="Is QiQi Professional Haircare suitable for all hair types?"
            answer="Yes, our products are meticulously crafted to enhance the beauty of all hair types."
          />
          <QaItem
            title="Does QiQi Professional Haircare conduct animal testing?"
            answer="Never. Our dedication to ethical practices extends to our furry friends, aligning with our commitment to universal well-being."
          />
          <QaItem
            title="Are QiQi haircare products safe for individuals with sensitive scalps?"
            answer="Absolutely. Our advanced formulations prioritize gentleness while delivering potent results, ensuring a harmonious experience for sensitive scalps."
          />
          <QaItem
            title="Where can I find and purchase QiQi Professional Haircare products?"
            answer="You can explore and purchase our products here on our online store. Our products are available for worldwide shipping!"
          />
        </div>
      </section>
    </div>
  );
}
