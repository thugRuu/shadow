import Image from "next/image";
export const HorizontalCard = (props: { size: number }) => (
  <div className="mx-16 py-2">
    <div className="card my-5 bg-base-200 py-5 shadow-lg lg:card-side">
      <figure className="px-2 py-2">
        <Image
          className="rounded-xl shadow-slate-500"
          src="https://imgs.search.brave.com/hgVkGSSfyHWHcfK8DcafxldAwdiYrrdyCXW264V6XT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/NDM5NTQ5L3Bob3Rv/L3BlbmNpbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y1Fy/ay1QTGFmTFFMcnQx/X3NPTmNNSmtwMHlw/NEJDMXl5TzBGNzBm/OVhWWT0"
          alt="Album"
          sizes={"100vw"}
          style={{ width: "100%", height: "auto" }}
          width={props.size}
          height={props.size}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Headline</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          aperiam sit tenetur consequatur saepe porro vel sequi, explicabo
          corrupti magni culpa autem aliquid quis exercitationem ex unde
          mollitia eveniet dolores?
        </p>
      </div>
    </div>
  </div>
);

export const VerticalCard = (props: { size: number }) => (
  <div className="mx-16 py-1">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          className="rounded-xl shadow-slate-500"
          src="https://imgs.search.brave.com/hgVkGSSfyHWHcfK8DcafxldAwdiYrrdyCXW264V6XT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/NDM5NTQ5L3Bob3Rv/L3BlbmNpbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y1Fy/ay1QTGFmTFFMcnQx/X3NPTmNNSmtwMHlw/NEJDMXl5TzBGNzBm/OVhWWT0"
          alt="Album"
          sizes={"65vw"}
          style={{ width: "auto", height: "auto" }}
          width={props.size}
          height={props.size}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  </div>
);
