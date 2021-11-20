import { faClock, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  description: string;
  lessons?: string;
  duration?: string;
}

export default function Card({ title, description, lessons, duration }: Props) {
  return (
    <div className="border-2 border-gray-100 rounded-lg hover:shadow-md hover:border-0 transform hover:-translate-y-1 transition-all duration-200">
      <img
        className="w-full object-cover h-40 rounded-t-lg"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yedh-7321e3e3-0846-4b77-b418-a30348f982f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVkaC03MzIxZTNlMy0wODQ2LTRiNzctYjQxOC1hMzAzNDhmOTgyZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nvmUh7ZUbQgHUITE1Dhs97KzGb_gD2BjLiOiq73oMLY"
      />
      <div className="flex flex-col justify-between p-6 space-y-4 h-60">
        <div className="flex-1 space-y-3">
          <p className="text-md font-bold line-clamp-2">{title}</p>
          <p className="text-md line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-col space-y-3">
          <span>
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-green-500 mr-2"
            />
            12 Lessons
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} className="text-green-500 mr-2" />1
            hr 30 min
          </span>
        </div>
      </div>
    </div>
  );
}
