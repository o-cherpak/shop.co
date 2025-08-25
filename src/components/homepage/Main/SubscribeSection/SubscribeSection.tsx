import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import {type FormEvent, useState} from "react";
import {hoverBgColor} from "../../../../constants/colors.ts";
import {EmojiShoots} from "../../../../services/EmojiShoots.ts";
import {toast, Toaster} from "react-hot-toast";

export function SubscribeSection() {
  const [email, setEmail] = useState<string>("");


  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const EMAIL_PUBLIC_ID = import.meta.env.VITE_EMAIL_PUBLIC_ID;

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, EMAIL_PUBLIC_ID)
      .then(() => toast.success("Subscribe email sent successfully"))
      .catch((error) => toast.error(`Error sending email: ${error}`));
  };

  return (
    <section className="p-4 pt-10">
      <Toaster/>

      <form
        action=""
        onSubmit={(e) => {
          onSubmitHandle(e)
          EmojiShoots();
        }}
        className="bg-black rounded-2xl p-6 flex flex-col lg:flex-row gap-6 justify-center items-center"
      >
        <h2
          className="text-bold text-3xl lg:text-4xl text-white lg:w-1/2 font-internal font-bold"
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-4 lg:w-1/4 justify-center items-center ">
          <div className="bg-white flex items-center w-full px-4 py-2 rounded-xl gap-2">
            <div className="flex pt-[1px]">
              <FontAwesomeIcon icon={faEnvelope} color="gray"/>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="bg-white w-full text-lg border-none outline-0"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`bg-white w-full rounded-xl p-2 font-semibold text-lg cursor-pointer 
            hover:scale-105 transition-all duration-500 ${hoverBgColor} hover:text-white active:scale-60`}
          >
            Subscribe to Newsletter
          </button>
        </div>
      </form>
    </section>
  );
}
