export const metadata = {
  title: "Support | Serene Spa",
  description: "Need help? Contact our support team.",
};

export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have questions or need assistance, please contact us via email:
      </p>
      <a
        href="mailto:support@myapp.com"
        className="text-blue-600 hover:underline"
      >
        support@myapp.com
      </a>
    </main>
  );
}
