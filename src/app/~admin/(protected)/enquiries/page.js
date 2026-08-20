import EnquiryTable from "../_lib/EnquiryTable";

export default function AdminEnquiriesPage({ searchParams }) {
  return (
    <EnquiryTable
      formType="CONTACT"
      title="Contact Enquiries"
      basePath="/admin/enquiries"
      searchParams={searchParams}
    />
  );
}
