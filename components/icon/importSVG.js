const importAll = requireContext => requireContext.keys().forEach(requireContext);
importAll(require.context('./svg', true, /\.svg$/));
