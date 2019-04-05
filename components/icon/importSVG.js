const importAll = requireContext => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('./svg', true, /\.svg$/));
} catch (e) {}
