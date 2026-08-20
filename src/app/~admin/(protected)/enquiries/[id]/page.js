import EnquiryDetail from "../../_lib/EnquiryDetail";

export default async function AdminEnquiryDetailPage({ params }) {
  const { id } = await params;

  return (
    <EnquiryDetail
      id={id}
      title="Enquiry Details"
      basePath="/admin/enquiries"
      backLabel="Back to Contact Enquiries"
    />
  );
}
