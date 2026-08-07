import EnquiryTable from "../_lib/EnquiryTable";

export default function AdminRequestQuotePage({ searchParams }) {
  return (
    <EnquiryTable
      formType="REQUEST_QUOTE"
      title="Request Quote"
      basePath="/admin/request-quote"
      searchParams={searchParams}
    />
  );
}
