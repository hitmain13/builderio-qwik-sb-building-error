import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/module/src/components/footer/footer";
import Header from "~/module/src/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
