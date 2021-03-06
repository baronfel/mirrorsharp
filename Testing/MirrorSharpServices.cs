using MirrorSharp.Advanced;
using MirrorSharp.Advanced.EarlyAccess;
using MirrorSharp.Internal;

namespace MirrorSharp.Testing {
    /// <summary>MirrorSharp extension services.</summary>
    public class MirrorSharpServices {
        /// <summary>Defines a <see cref="ISetOptionsFromClientExtension" /> used to support extra options.</summary>
        public ISetOptionsFromClientExtension? SetOptionsFromClient { get; set; }

        /// <summary>Defines a <see cref="ISlowUpdateExtension" /> used to extend periodic processing.</summary>
        public ISlowUpdateExtension? SlowUpdate { get; set; }

        internal IRoslynGuard? RoslynGuard { get; set; }

        /// <summary>Defines a <see cref="IExceptionLogger" /> called for any unhandled exception.</summary>
        public IExceptionLogger? ExceptionLogger { get; set; }

        internal ImmutableExtensionServices ToImmutable() {
            return new ImmutableExtensionServices(SetOptionsFromClient, SlowUpdate, RoslynGuard, ExceptionLogger);
        }
    }
}
