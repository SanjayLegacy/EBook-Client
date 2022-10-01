import Button from "../Components/base/button/button";
import Field from "../Components/base/field/field";
import { useEBookHooks } from "../Hooks/EBookHooks";
import background from "../Assets/loginbgImage.svg";

export default function AddNewBook() {
  const { register, errors, onSubmit } = useEBookHooks();

  return (
    <div className="grid grid-cols-2 h-screen">
      <form
        className="bg-white flex flex-col justify-center items-center rounded-md"
        onSubmit={onSubmit}
      >
        <span className="text-xl text-center uppercase">Add New Book</span>
        <Field
          {...register("title")}
          error={errors?.title?.message}
          type="text"
          name="title"
          placeholder="Title"
          className="mt-4"
        />
        <Field
          {...register("author")}
          error={errors?.author?.message}
          type="text"
          name="author"
          placeholder="Author Name"
          className="mt-4"
        />
        <Field
          {...register("genre")}
          error={errors?.genre?.message}
          type="text"
          name="genre"
          placeholder="Genre"
          className="mt-4"
        />
        <Field
          {...register("thumbnailUrl")}
          error={errors?.thumbnailUrl?.message}
          type="text"
          name="thumbnailUrl"
          placeholder="Image Link"
          className="mt-4"
        />
        <Field
          {...register("shortDescription")}
          error={errors?.shortDescription?.message}
          type="text"
          name="shortDescription"
          placeholder="Short Description"
          className="mt-4"
        />
        <Field
          {...register("longDescription")}
          error={errors?.longDescription?.message}
          type="text"
          name="longDescription"
          placeholder="Long Description"
          className="mt-4"
        />
        <Field
          {...register("publishedYear")}
          error={errors?.publishedYear?.message}
          type="text"
          name="publishedYear"
          placeholder="Published Year"
          className="mt-4"
        />
        <Field
          {...register("rent")}
          error={errors?.rent?.message}
          type="text"
          name="rent"
          placeholder="Rent per day"
          className="mt-4"
        />
        <Field
          {...register("pageCount")}
          error={errors?.pageCount?.message}
          type="text"
          name="pageCount"
          placeholder="Page Count"
          className="mt-4"
        />
        <div className="justify-center items-center flex flex-col">
          <Button
            className=" py-3 text-white mt-4"
            color="primary"
            submit
          >{`ADD`}</Button>
        </div>
      </form>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
