import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PlaceholderImg from "@images/placeholder.png";

function UserAvatar({
  name,
  image,
  classname,
}: {
  name: string;
  image: string;
  classname?: string;
}) {
  return (
    <Avatar className={cn("bg-white text-black", classname)}>
      {image && (
        <Image
          src={image || PlaceholderImg}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback className="dark:bg-white dark:text-black text-lg">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
