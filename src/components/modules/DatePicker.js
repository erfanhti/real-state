import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

function DatePickerJalali({ data, setData }) {
  return (
    <div>
      <label>تاریخ ساخت :</label>
      <DatePicker
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        calendar={persian}
        locale={persian_fa}
        inputClass="custom-input"
        calendarPosition="bottom-left"
        value={data.constructionDate}
        onChange={(e) => setData({ ...data, constructionDate: new Date(e) })}
      />
    </div>
  );
}

export default DatePickerJalali;
