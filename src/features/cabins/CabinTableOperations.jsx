import { RxValue } from "react-icons/rx";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "no discount",
          },
          {
            value: "with-discount",
            label: "with discount",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
